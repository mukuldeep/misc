//https://warranty.boat-lifestyle.com/service-center
/*
  bug on url : https://warranty.boat-lifestyle.com/service-center
  and on next screen
  sends code to mobile_number
*/
function send_verification_code(mobile_number){
	console.log("sending for ", mobile_number);
	$.ajax({
                url:'https://warranty.boat-lifestyle.com/sendOTP'+'/'+mobile_number,
                type: 'GET',
                dataType: 'json',
                success: function (data) {
            
            if(data.status == 'success')
            {
				console.log("sent for ", mobile_number);
            }
            else{
                console.log("something wrong... please try later");
            }
        },
        error: function (error) {
                    console.log('error');
                }
       });

}

send_verification_code(xxxx_number_here_xxxxxx);
