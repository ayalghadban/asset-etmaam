        //const axios = require('axios');

        var transtype;
        var wpsvaild;
        var app = new Vue({
            el: '#app',
            data: {
                info: [],
                pack: null,
                cost:0,
                num_of_employees:0,
                future_employees:0,
                fcost:0,
                period:1,
                save_salary:false,
                vartxt:99

            },
            methods: {
                packtypeOnChange(event) {
                    console.log(event.target.value)
                    this.calculatePrice();
                },
                salaryOnChange(event) {
                    console.log(event.target.value)
                    this.calculatePrice();
                },
            resetInput() {
            this.cost = "0";
            this.pack = "";
            this.num_of_employees = "";
            this.save_salary = "false";
             },

                calculatePrice() {
                    if (this.pack == 'basic') {
                        this.cost = 5500 * this.period / 100 * 115;

                        if (this.num_of_employees > 4) {
                            this.cost += (this.num_of_employees-4)*500*this.period / 100 * 115;
                            // this.cost += (this.num_of_employees-4)*500*this.period / 100 * 115 +(this.future_employees*500);
                            // تم عمل حقل المتوقع بفاريبل fcost
                            // ولكن يجب فصله وان يطبق عليه الشرط
                            // this.fcost = (this.future_employees*500) / 100 * 115;

                        }
                        if (this.save_salary == 'true') {
                            this.cost += 3000*this.period / 100 * 115;
                        }
                    }else if(this.pack == 'silver'){
                        this.cost = 7500 * this.period / 100 * 115;


                        if (this.num_of_employees > 4) {
                            this.cost += (this.num_of_employees-9)*500*this.period / 100 * 115;
                        }

                        if (this.save_salary == 'true') {
                            this.cost += 3000*this.period / 100 * 115;
                        }

                    }else if(this.pack == 'gold'){
                        this.cost = 13500 * this.period / 100 * 115;

                        if (this.num_of_employees > 9) {
                            this.cost += (this.num_of_employees-9)*750*this.period / 100 * 115;
                        }


                    }else if(this.pack == 'plat'){
                        this.cost = 20000 * this.period / 100 * 115;
                        if (this.num_of_employees > 9) {
                            this.cost += (this.num_of_employees-9)*750*this.period / 100 * 115;
                        }


                    }else{
                        this.cost = 0 ;
                    }


                    // كود الخاص بالعدد المتوقع يجب التغيير بالمعادلة

                    // الباقة الأساسية والفضية العمال المستقبليين
                    if(this.pack == 'basic' || this.pack == 'silver'){
                        if (this.future_employees > 0 ) {
                            this.fcost = (this.future_employees)*500*this.period  / 100 * 115;
                            14*500/100*115

                        }
                    }

                    if(this.pack == 'gold'){
                        if (this.future_employees > 0 ) {
                            this.fcost = (this.future_employees)*750*this.period  / 100 * 115;

                        }
                    }

                    if(this.pack == 'plat'){
                        if (this.future_employees > 0 ) {
                            this.fcost = (this.future_employees)*1000*this.period  / 100 * 115;

                        }
                    }


                    // الباقة الذهبية العمال المستقبليين
                    //     if (this.future_employees > 10 || this.future_employees > 10  ) {
                    //   this.fcost = (this.future_employees)*750*this.period  / 100 * 115;
                    //     }

                    // الباقة الألماسية العمال المستقبليين
                    //     if (this.future_employees > 9 && this.future_employees < 100 ) {
                    //   this.fcost = (this.future_employees)*1000*this.period  / 100 * 115;
                    //     }







                    document.getElementById('sal1').value = this.cost;

                    document.getElementById('salview').innerHTML = this.cost

                    document.getElementById('packtype').innerHTML = this.pack;
                    document.getElementById('packtype10').innerHTML = document.getElementById('packtype').innerHTML;

                    document.getElementById('numemp').innerHTML = this.num_of_employees;
                    document.getElementById('numemp0').innerHTML = document.getElementById('numemp').innerHTML;

                    document.getElementById('wps').innerHTML = this.save_salary;
                    document.getElementById('wps0').innerHTML = document.getElementById('wps').innerHTML;

                    document.getElementById('numthink').innerHTML = this.future_employees;
                    document.getElementById('numthink0').innerHTML = document.getElementById('numthink').innerHTML;

                    document.getElementById('yearshow').innerHTML = this.period;
                    document.getElementById('yearshow0').innerHTML = document.getElementById('yearshow').innerHTML;

                    // تعريف السعر المتوقع
                    document.getElementById('costforfuture').innerHTML = this.fcost;






                    //             <p id="wps"></p>
                    // <p id="numthink"></p>
                    // <p id="yearshow"></p>

                    // document.getElementById('packtype').innerHTML = this.pack;
                    // document.getElementById('packtype1').innerHTML = document.getElementById('packtype').innerHTML;


                    // document.getElementById('packtype').innerHTML = this.pack;
                    // document.getElementById('packtype1').innerHTML = document.getElementById('packtype').innerHTML;

                    // document.getElementById('packtype1').innerHTML = "tt";

                    return this.cost;


                },
                copyText: function(text_name,message) {

                    let testingCodeToCopy = document.querySelector('#'+text_name)
                    let msg_item = document.getElementById(message);
                    testingCodeToCopy.setAttribute('type', 'text');
                    testingCodeToCopy.select();

                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'Copied!' : 'Failed!';
                        msg_item.innerHTML = msg;
                    } catch (err) {
                        msg_item.innerHTML = msg;
                    }

                    /* unselect the range */
                    testingCodeToCopy.setAttribute('type', 'hidden');
                    window.getSelection().removeAllRanges();
                },
            },

            mounted () {

            }
        })
 
 
 
 
$("#texur").keypress(function() {
    if($(this).val().length > 0) {
    $("#texur").css("border", "1px solid #666666");
	$('.bas').removeAttr('disabled');
  	$('.bas').removeClass('disabled');
    }
});



