var inputbutton = []
var [touchscreen, goBack, chooseMV, chooseTime, chooseSeat, chooseDrink, Nomember, scanMember, money, payCredit, money1000, money100, money20, scanCredit] = [false, false, false, false, false,false, false, false, false, false,false, false, false, false]
/*
A แตะหน้าจอเพื่อไปต่อ
B กดกลับไปstate ก่อนหน้า
C กดเลือกภาพยนตร์
D กดเลือกเวลาฉายภาพยนตร์
E กดเลือกที่นั่ง
F กดเลือกขนมและเครื่องดื่ม
G ไม่เป็นสมาชิก
็H สแกนบัตรสมาชิก
I ชำระเงินสด
J จ่ายบัตรเครดิต
K ใส่แบงค์ 1000
L 100
M 20
N แสกนบัตรเครดิต
*/
const machine = {
  state: "INITIAL",
  transitions:{
    INITIAL:{
      A: function (){
        console.log('A')
        document.getElementById("stateImage").src = './s1.jpg'
        document.getElementById("machineImage").src = './screen2.jpg'
        console.log(this.state)
        this.changeState('B')
      },
      B: function (){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกที่นั่ง")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      F: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      G: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      H: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      I: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      J: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      K: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      M: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      N: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      }
    },
    B: {
      A: function(){
        console.log('A')
      },
      B: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      C: function(){
        console.log("ไม่สามารถกดเลือกภาพยนตร์")
      },
      D: function(){
        console.log("ไม่สามารถกดเลือกที่นั่ง")
      },
      E: function(){
        console.log("ไม่สามารถกดเลือกขนมและเครื่องดื่ม")
      },
      F: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      G: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      H: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      I: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      J: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      K: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      M: function(){
        console.log("ไม่สามารถย้อนกลับได้")
      },
      N: function(){
        console.log("ไม่สามารถย้อนกลับได้")
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
  [touchscreen,goBack] = [!touchscreen,false]
  Jeff.dispatch("A")
  console.log(Jeff.state)
  inputbutton.push("A")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}

function clickB(){
  [touchscreen,goBack] = [false,!goBack]
  Jeff.dispatch("B")
  console.log(Jeff.state)
  inputbutton.push("B")
  document.getElementById("languageText").innerHTML = inputbutton.join(" ")
}

// function product() {
//   let str = ""
//   if (A){ str += "A "}
//   if (B){ str += "B "}

//   [A, B, C, D, E, F, G, H, I, J, K, L, M, N] = [false, false, false, false, false,false, false, false, false, false,false, false, false, false]
//   return "ยินดีด้วยคุณได้รับตั๋วหนังแล้ว " + str + "!!!"
// }