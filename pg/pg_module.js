$(document).ready(function () {
	var IMP = window.IMP; // 생략가능
	IMP.init('imp58237888');

	var payment = function (IMP, price, pre_name, applicant_name) {
		IMP.request_pay({
			pg: 'kcp', //웹표준 결제창 지원
			pay_method: 'card', //card(신용카드), trans(실시간계좌이체), vbank(가상계좌), phone(휴대폰소액결제)
			merchant_uid: 'merchant_' + new Date().getTime(), //상점에서 관리하시는 고유 주문번호를 전달
			name: pre_name,
			amount: price,
			buyer_name: applicant_name
		}, function (rsp) {
			if (rsp.success) {
				//[1] 고객 입장에서 결제가 완료되었고, 아임포트 서버에도 결제완료로 상태가 변경된 상황
				//가맹점 서버단에서 아임포트 REST API로 결제정보 조회를 위해 imp_uid를 운영하는 서버로 전달하기
				jQuery.ajax({
					url: "/payments/complete", //cross-domain error가 발생하지 않도록 주의해주세요
					type: 'POST',
					dataType: 'json',
					data: {
						imp_uid: rsp.imp_uid
					}
				}).done(function (data) {
					//[2] 서버에서 REST API로 결제정보확인 후 가맹점 DB에 결제완료로 상태 변경 등 서비스루틴이 정상적인 경우
					if (rsp.paid_amount === price) {
						var msg = '결제가 완료되었습니다.';
						msg += '\n고유ID : ' + rsp.imp_uid;
						msg += '\n상점 거래ID : ' + rsp.merchant_uid;
						msg += '\n결제 금액 : ' + rsp.paid_amount;
						msg += '카드 승인번호 : ' + rsp.apply_num;

						alert(msg);
					} else {
						alert("결제가 비정상적인 종료를 하였습니다.")
					}
				});
			} else {
				//결제 실패 : error_msg속성에 실패 사유가 전달됨
				var msg = '결제에 실패하였습니다.';
				msg += '에러내용 : ' + rsp.error_msg;
				alert(msg);
			}
		});
	};

	$('#okBtn').click(function () {
			var user_name = $('#applicant_name').val();
			if (user_name !== '') {
				if (confirm(user_name + "님이 맞나요?")) {
					var chekcIncome = $(":input:radio[name=checkIncome]:checked").val();
					if (chekcIncome === 'incomeYes') {
						payment(IMP, 50000, '2018_데놀티켓(수입있음)', user_name);
					} else if (chekcIncome === 'incomeNo') {
						payment(IMP, 10000, '2018_데놀티켓(수입없음)', user_name);
					} else {
						window.location.reload();
					}
				} else {
					alert("신청자 이름 입력은 필수입니다.");
				}
			}
		}
	);
});