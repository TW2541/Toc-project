var inputbutton = []
var isMember = false
var amount = 0
var ticket = 0
var paid = 0
var total_price = 0
const password = '010520'
var cols = document.getElementsByClassName("price")
/*
A แตะหน้าจอเพื่อไปต่อ       S0 แสดงโฆษณา
B กดกลับไปstate ก่อนหน้า   S1 เลือกภาพยนต์
C กดเลือกภาพยนตร์         S2 เลือกเวลาฉาย
D กดเลือกเวลาฉายภาพยนตร์   S3 เลือกที่นั่ง
E กดเลือกที่นั่งธรรมดา        S4 เลือกขนมและเครื่องดื่ม
F กดเลือกที่นั่งโซฟา         S5 ตรวจสอบสมาชิก
G กดเลือกขนมและเครื่องดื่ม    S6 เลือกวิธีชำระ
H ไม่เป็นสมาชิก             S7 ชำระยังไม่ครบ
็I สแกนบัตรสมาชิก          S8 ชำระครบ
J ชำระเงินสด              S9 ชำระเกิน
K จ่ายบัตรเครดิต            
L ใส่แบงค์ 1000
M 100
N 20
O สแกนบัตรเครดิต
*/
const machine = {
  state: "S0",
  transitions:{
    S0:{
      A: function (){
        console.log('A')
        document.getElementById("stateImage").src = './images/states/s1.jpg'
        document.getElementById("machineImage").src = './images/machines/screen1.jpg'
        //console.log(this.state)
        this.changeState('S1')
      },
      B: function (){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S1: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      C: function(){
        console.log('C')
        document.getElementById("stateImage").src = './images/states/s2.jpg'
        document.getElementById("machineImage").src = './images/machines/screen2.jpg'
        //console.log(this.state)
        this.changeState('S2')
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S2: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        document.getElementById("stateImage").src = '/images/states/s1.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen1.jpg'
        //console.log(this.state)
        this.changeState('S1')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        //console.log("ไม่สามารถกดเลือกเวลา")
        console.log('D')
        document.getElementById("stateImage").src = '/images/states/s3.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen3.jpg'
        //console.log(this.state)
        this.changeState('S3')
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S3: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        document.getElementById("stateImage").src = '/images/states/s2.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen2.jpg'
        //console.log(this.state)
        this.changeState('S2')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        //console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
        console.log('E')
        amount = prompt('Enter amount of ticket.(Normal)')
        if(amount > 0){
          console.log(amount)
          ticket = 240
          document.getElementById("stateImage").src = '/images/states/s4.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen4.jpg'
          //console.log(this.state)
          this.changeState('S4')
        }
        else{
          alert('Please enter positive number!!')
        }
      },
      F: function(){
        //console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
        console.log('F')
        amount = prompt('Enter amount of ticket.(Sofa)')
        if(amount > 0){
          console.log(amount)
          ticket = 360
          document.getElementById("stateImage").src = '/images/states/s4.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen4.jpg'
          //console.log(this.state)
          this.changeState('S4')
        }
        else{
          alert('Please enter positive number!!')
        }
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S4: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        amount = 0
        ticket = 0
        document.getElementById("stateImage").src = '/images/states/s3.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen3.jpg'
        //console.log(this.state)
        this.changeState('S3')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        //console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
        console.log('G')
        document.getElementById("stateImage").src = '/images/states/s5.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen5.jpg'
        //console.log(this.state)
        this.changeState('S5')
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S5: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        document.getElementById("stateImage").src = '/images/states/s4.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen4.jpg'
        //console.log(this.state)
        this.changeState('S4')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        //console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
        isMember = false
        console.log('H')
        document.getElementById("stateImage").src = '/images/states/s6.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen6.jpg'
        //console.log(this.state)
        this.changeState('S6')
      },
      I: function(){
        //console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
        isMember = true
        console.log('I')
        document.getElementById("stateImage").src = '/images/states/s6.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen6.jpg'
        //console.log(this.state)
        this.changeState('S6')
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S6: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        isMember = false
        console.log('B')

        document.getElementById("stateImage").src = '/images/states/s5.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen5.jpg'
        //console.log(this.state)
        this.changeState('S5')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        //console.log("ไม่สามารถเลือกชำระเงินสด")
        console.log('J')
        total_price = summary(ticket,amount,isMember)
        console.log(total_price)

        document.getElementById("seat").style.visibility = 'visible'
        document.getElementById("member").style.visibility = 'visible'
        if(isMember){ document.getElementById("member").innerHTML = 'Yes' }  
        else { document.getElementById("member").innerHTML = 'No' } 
        document.getElementById("Total").style.visibility = 'visible'
        document.getElementById("Paid").style.visibility = 'visible'
        document.getElementById("Total").innerHTML = total_price
        document.getElementById("Paid").innerHTML = paid
        document.getElementById("stateImage").src = '/images/states/s7.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen7.jpg'
        //console.log(this.state)
        this.changeState('S7')
      },
      K: function(){
        //console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
        console.log('K')
        total_price = summary(ticket,amount,isMember)
        console.log(total_price)

        document.getElementById("seat").style.visibility = 'visible'
        document.getElementById("member").style.visibility = 'visible'
        if(isMember){ document.getElementById("member").innerHTML = 'Yes' }  
        else { document.getElementById("member").innerHTML = 'No' } 
        document.getElementById("Total").style.visibility = 'visible'
        document.getElementById("Total").innerHTML = total_price
        cols[0].style.top = '56.9%'

        document.getElementById("stateImage").src = '/images/states/s8.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen8.jpg'
        //console.log(this.state)
        this.changeState('S8')
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S7: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        total_price = 0

        document.getElementById("seat").style.visibility = 'hidden'
        document.getElementById("member").style.visibility = 'hidden'
        document.getElementById("Total").style.visibility = 'hidden'
        document.getElementById("Paid").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/s6.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen6.jpg'
        //console.log(this.state)
        this.changeState('S6')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        paid = paid + 1000
        document.getElementById("Paid").innerHTML = paid
        if( paid >= total_price ){
          console.log('L')

          document.getElementById("seat").style.visibility = 'hidden'
          document.getElementById("member").style.visibility = 'hidden'
          document.getElementById("Total").style.visibility = 'hidden'
          document.getElementById("Paid").style.visibility = 'hidden'
          document.getElementById("changed").style.visibility = 'visible'
          document.getElementById("changed").innerHTML = 'Change : ' + (paid - total_price)
          document.getElementById("stateImage").src = '/images/states/s9.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen9.jpg'
          //console.log(this.state)
          this.changeState('S9')
        }
        else{
          console.log('L')
          document.getElementById("stateImage").src = '/images/states/s7.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen7.jpg'
          //console.log(this.state)
          this.changeState('S7')
        }
      },
      M: function(){
        paid = paid + 100
        document.getElementById("Paid").innerHTML = paid
        if( paid >= total_price ){
          console.log('M')

          document.getElementById("seat").style.visibility = 'hidden'
          document.getElementById("member").style.visibility = 'hidden'
          document.getElementById("Total").style.visibility = 'hidden'
          document.getElementById("Paid").style.visibility = 'hidden'
          document.getElementById("changed").style.visibility = 'visible'
          document.getElementById("changed").innerHTML = 'Change : ' + (paid - total_price)
          document.getElementById("stateImage").src = '/images/states/s9.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen9.jpg'
          //console.log(this.state)
          this.changeState('S9')
        }
        else{
          console.log('M')
          document.getElementById("stateImage").src = '/images/states/s7.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen7.jpg'
          //console.log(this.state)
          this.changeState('S7')
        }
      },
      N: function(){
        paid = paid + 20
        //document.getElementById("Total").innerHTML = total_price
        document.getElementById("Paid").innerHTML = paid
        if( paid >= total_price ){
          console.log('N')

          document.getElementById("seat").style.visibility = 'hidden'
          document.getElementById("member").style.visibility = 'hidden'
          document.getElementById("Total").style.visibility = 'hidden'
          document.getElementById("Paid").style.visibility = 'hidden'
          document.getElementById("changed").style.visibility = 'visible'
          document.getElementById("changed").innerHTML = 'Change : ' + (paid - total_price)
          document.getElementById("stateImage").src = '/images/states/s9.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen9.jpg'
          //console.log(this.state)
          this.changeState('S9')
        }
        else{
          console.log('N')
          document.getElementById("stateImage").src = '/images/states/s7.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen7.jpg'
          //console.log(this.state)
          this.changeState('S7')
        }
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }, //done
    S8: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        //console.log("ไม่สามารถย้อนกลับได้")
        console.log('B')
        total_price = 0
        cols[0].style.top = '54.7%'
        document.getElementById("seat").style.visibility = 'hidden'
        document.getElementById("member").style.visibility = 'hidden'
        document.getElementById("Total").style.visibility = 'hidden'
        document.getElementById("Paid").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/s6.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen6.jpg'
        //console.log(this.state)
        this.changeState('S6')
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        //console.log("ไม่สามารถสแกนบัตรเครดิต")
        console.log('O')
        var pass = prompt('Please enter your card\'s password')
        if(pass == password){
          paid = total_price
          document.getElementById("seat").style.visibility = 'hidden'
          document.getElementById("member").style.visibility = 'hidden'
          document.getElementById("Total").style.visibility = 'hidden'
          document.getElementById("Paid").style.visibility = 'hidden'
          document.getElementById("stateImage").src = '/images/states/s9.jpg'
          document.getElementById("machineImage").src = '/images/machines/screen9.jpg'
          //console.log(this.state)
          this.changeState('S9')  
        }
        else{
          alert('Wrong Password!!!')
        }
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    },
    S9: {
      A: function (){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        document.getElementById("machineImage").src = '/images/machines/screen9.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      B: function (){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      C: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      D: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      E: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      F: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      G: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      H: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      I: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      J: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      K: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      L: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      M: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      N: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      O: function(){
        document.getElementById("changed").style.visibility = 'hidden'
        document.getElementById("stateImage").src = '/images/states/trap.jpg'
        //console.log(this.state)
        this.changeState('trap')
      },
      Cf: function(){
        alert('Accept!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    },
    trap: {
      A: function (){
        console.log("ไม่สามารถกดไปต่อได้")
      },
      B: function (){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกเวลา")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกที่นั่งธรรมดาได้")
      },
      F: function(){
        console.log("ไม่สามารถเลือกที่นั่งโซฟาได้")
      },
      G: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      H: function(){
        console.log("ไม่สามารถเลือกไม่เป็นสมาชิกได้")
      },
      I: function(){
        console.log("ไม่สามารถแสกนบัตรสมาชิกได้")
      },
      J: function(){
        console.log("ไม่สามารถเลือกชำระเงินสด")
      },
      K: function(){
        console.log("ไม่สามารถเลือกชำระบัตรเครดิต")
      },
      L: function(){
        console.log("ไม่สามารถใส่แบงค์ 1000 บาท")
      },
      M: function(){
        console.log("ไม่สามารถใส่แบงค์ 100 บาท")
      },
      N: function(){
        console.log("ไม่สามารถใส่แบงค์ 20 บาท")
      },
      O: function(){
        console.log("ไม่สามารถสแกนบัตรเครดิต")
      },
      Cf: function(){
        alert('Reject!!')
      },
      Rs: function(){
        this.changeState('S0')
      }
    }
  },
  dispatch(actionName) {
      const actions = this.transitions[this.state];
      const action = this.transitions[this.state][actionName];

      if (action) {
          action.apply(machine);
      }

  },
  changeState(newState) {
      this.state = newState;
  }
}

let Jeff = Object.create(machine, {
  name: {
      writable: false,
      enumerable: true,
      value: "Jeff"
  }
});

function clickA(){
  //[touchscreen,goBack] = [!touchscreen,false]
  Jeff.dispatch("A")
  console.log(Jeff.state)
  inputbutton.push("A")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickB(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("B")
  console.log(Jeff.state)
  inputbutton.push("B")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickC(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("C")
  console.log(Jeff.state)
  inputbutton.push("C")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickD(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("D")
  console.log(Jeff.state)
  inputbutton.push("D")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickE(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("E")
  console.log(Jeff.state)
  inputbutton.push("E")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickF(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("F")
  console.log(Jeff.state)
  inputbutton.push("F")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickG(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("G")
  console.log(Jeff.state)
  inputbutton.push("G")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickH(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("H")
  console.log(Jeff.state)
  inputbutton.push("H")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickI(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("I")
  console.log(Jeff.state)
  inputbutton.push("I")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickJ(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("J")
  console.log(Jeff.state)
  inputbutton.push("J")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickK(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("K")
  console.log(Jeff.state)
  inputbutton.push("K")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickL(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("L")
  console.log(Jeff.state)
  inputbutton.push("L")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickM(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("M")
  console.log(Jeff.state)
  inputbutton.push("M")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickN(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("N")
  console.log(Jeff.state)
  inputbutton.push("N")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function clickO(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("O")
  console.log(Jeff.state)
  inputbutton.push("O")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function Confirm(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("Cf")
  console.log(Jeff.state)
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}
function Restart(){
  //[touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("Rs")
  console.log(Jeff.state)
  console.log('Restart')
  document.getElementById("seat").style.visibility = 'hidden'
  document.getElementById("member").style.visibility = 'hidden'
  document.getElementById("Total").style.visibility = 'hidden'
  document.getElementById("Paid").style.visibility = 'hidden'
  document.getElementById("changed").style.visibility = 'hidden'
  document.getElementById("stateImage").src = './images/states/s0.jpg'
  document.getElementById("machineImage").src = './images/machines/screen0.jpg'
  inputbutton = []
  isMember = false
  amount = 0
  ticket = 0
  paid = 0
  total_price = 0
  cols[0].style.top = '54.7%'
  //console.log(this.state)
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}

function summary(_price,_amount,_member){
  var total = _price * _amount
  if(_member){
    total = total / 2
  }

  return total
}
function showInit(){
  alert('ตู้ขายตั๋วภาพยนต์นี้ เป็นNondeterministic Finite Automata\nผู้ใช้สามารถทดลองใช้โดยกดปุ่มinputทางฝั่งขวา ส่วนทางฝั่งซ้ายนั้นเป็นเพียงจอแสดงผล\nผู้ใช้สามารถทราบรายละเอียดของstateและinputได้จากช่องด้านล่างขวา\nเมื่อผู้ใช้ใส่inputเท่าที่ต้องการแล้วเมื่ออยู่ในfinal stateเมื่อกดConfirmจะแสดง Accept นอกนั้น reject')
}


// function product() {
//   let str = ""
//   if (A){ str += "A "}
//   if (B){ str += "B "}

//   [A, B, C, D, E, F, G, H, I, J, K, L, M, N] = [false, false, false, false, false,false, false, false, false, false,false, false, false, false]
//   return "ยินดีด้วยคุณได้รับตั๋วหนังแล้ว " + str + "!!!"
// }