let num = 10;
    num += 500;
    console.log(typeof num)
    num += "원";
    console.log(typeof num)
    num += 100;
    num += 100; //510원100100
    console.log(typeof num)
    parseInt(num)
    console.log(typeof num)
    num = parseInt(num)
    console.log(typeof num) // 510 숫자가 됨

    // 1000원 반드시 = 식은 불가
    num += 490;
    num += "원";
    
    console.log(num)

