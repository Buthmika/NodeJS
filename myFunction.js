const math=(num1,num2,num3,num4) => {
      let a=num1+num2*2;
      if(num3){
            a=a+num3-5;
      }
      else if(num4){
            a=a*num4
      }
      return a;
}
console.log(math(2,3)); // 4
export default math;