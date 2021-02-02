/*function abc() {
    alert("External");
}*/


function calcular()
{
    let ab= document.getElementById("n1").value;
    //let ab = 3120;
     let bc = document.getElementById("n2").value;//3770;
     let cd = document.getElementById("n3").value;//2920;
     let da = document.getElementById("n4").value;//3850;
     let ac = document.getElementById("n5").value;//4680;
     let bd = document.getElementById("n6").value;//4993;

     let a = document.getElementById("n7").value;//2400, 
     let b = document.getElementById("n8").value;//2150, 
     let c = document.getElementById("n9").value;//2400, 
     let d = document.getElementById("n10").value;//2400;


     //1. USING ACD, CALCULATE DISTANCE AMONG POINTS, 3 TRIANGLES, XY PLANE
     alert("XY para ACD " + trinomio(ac,c,a));
     //alert("XY para ACD " + trinomio(da,d,a));
    // alert("XY para ACD " + trinomio(cd,d,c));

     // 1.1 USING ABC, CALCULATE DISTANCE AMONG POINTS, 3 TRIANGLES, XY PLANE
     //alert("XY para ABC " + trinomio(ac,c,a));
    // alert("XY para ABC " + trinomio(ab,b,a));
    // alert("XY para ABC " + trinomio(bc,c,b));

     //2. USING ABC, CALCULATE INTERNAL ANGLES, 3 TRIANGLES, XY PLANE

     let triangles, d11, d12, d13;
     d11 = trinomio(ac,c,a);
     console.log("d11", d11)
     d12 = trinomio(da,d,a);
     d13 = trinomio(cd,d,c);

     let d11pow = Math.pow(d11,2);
     let d12pow= Math.pow(d12,2);
     let d13pow=Math.pow(d13,2);

     let oper= (d11pow+d12pow) - d13pow;
     console.log("oper", oper);  
     let operacos = oper /(2*d11*d12);
     console.log("operacos", operacos);    
     triangles = Math.acos(operacos);
     console.log("Int angle", triangles);
     alert("Int angle ACAD " + triangles);

     
     let area = d11 * d12 * (Math.sin(triangles))/2;
    
     console.log("area", area);
     
     let operDA= (d12pow+d13pow) - d11pow;
     console.log("oper", oper);  
     let operaDAcos = operDA /(2*d12*d13);
     console.log("operaDAcos", operaDAcos);    
     trianglesDA = Math.acos(operaDAcos);
     console.log("Int angle DA", trianglesDA);
     
     let areaDA = d12 * d13 * (Math.sin(trianglesDA))/2;
    
     console.log("area DA", areaDA);

     let operCA= (d13pow+d11pow) - d12pow;
     console.log("oper", operCA);  
     let operCAacos = operCA /(2*d13*d11);
     console.log("operaCAcos", operCAacos);    
     trianglesCA = Math.acos(operCAacos);
     console.log("Int angle CA", trianglesCA);
     
     let areaCA = d11 * d13 * (Math.sin(trianglesCA))/2;
    
     console.log("area CA", areaCA);

     let hac= 2*(area/d11);
     let had = 2*(areaDA/d12);
     let hcd = 2*(areaCA/d13);

     console.log("hac", hac, "had", had, "hcd", hcd);


     let trianglHigh, m11, m12, m13;
     m11= trinomio(ac,c,a);
     m12=trinomio(ab,b,a);
     m13= trinomio(bc,c,b);

     let m11pow = Math.pow(m11,2);
     let m12pow= Math.pow(m12,2);
     let m13pow=Math.pow(m13,2);

     let iangAB= interAngle(m11pow,m12pow, m13pow,m11,m12);
     console.log("int angle ABCA", iangAB);

     let areah = m11 * m12 * (Math.sin(iangAB))/2;
     console.log("areah", areah);

     let iangBA= interAngle(m12pow,m13pow, m11pow,m12,m13);
     console.log("int angle ABCA", iangBA);

     let areahBA = m12 * m13 * (Math.sin(iangBA))/2;
     console.log("areah", areahBA);

     let iangCA= interAngle(m11pow,m13pow, m12pow,m11,m13);
     console.log("int angle ABCA", iangCA);

     let areahCA = m13 * m11 * (Math.sin(iangCA))/2;
     console.log("areah", areahCA);

// 3.CALCULATE POSITION AND DISTANCES IN XYZ, XY, A = (0,0), PARALEL TO C

    let ax = 0;
    let bx = Math.cos(iangAB)* m12;
    console.log("bx", bx);

    let dx = Math.cos(triangles)* d12;
    console.log("dx", dx);

    let by = Math.sin(iangAB)* m12;
    console.log("by", by);

    let dy = Math.sin(triangles)* d12;
    console.log("by", dy);

    let negative =-1* dy ;
    console.log(negative);

    // 4.CALCULATE DISTANCE FROM BD THEORICAL
    let v1 =Math.pow((dx-bx),2);
    let v2 = Math.pow((negative-by),2);
    let v3 = Math.pow((d-b),2);
   let bd4= Math.sqrt(v1+v2+v3);
   console.log("v1",v2, v3);
    console.log("bd4",bd4);
    //5. CALCULATE MEASUREMENT ERROR
    let errorcal = 1 - (bd/bd4);
    console.log("errorcal",errorcal);

    if (errorcal >1)
    {
        alert("No tolerable");
    } else
    {
        alert("tolerable");
    }
}


function trinomio(xyz, x, y)
     {
         poli = Math.pow(xyz,2);
         poliheight = Math.pow((x-y),2);
         result = poli - poliheight;
         poliRaiz =Math.sqrt(result);

         return poliRaiz;

     }

function interAngle(m1,m2,m3,m4,m5)
{
    let oper= (m1+m2) - m3;
     console.log("oper", oper);  
     let operacos = oper /(2*m5*m4);
     console.log("operacos", operacos);    
     trianglesh = Math.acos(operacos);
    

     
     

     return trianglesh;
}