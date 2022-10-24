

const demo = document.getElementById("demo");
document.getElementById("li_bai1").onclick = () => {

    demo.innerHTML = "";
    const inputD = createElement("input");
    const inputM = createElement("input");
    const inputY = createElement("input");
    const buttonBai11 = createElement("button");
    // const tieudeBai11 = createElement("");
    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 1: Viết chương trình nhập vào ngày, tháng, năm. Tìm ngày tháng năm của ngày trước và ngày kế tiếp."
    demo.appendChild(heading);
    setAttributeForElement(inputD);
    setAttributeForElement(inputM);
    setAttributeForElement(inputY);
    inputD.setAttribute("placeholder", "Nhập ngày");
    inputM.setAttribute("placeholder", "Nhập tháng");
    inputY.setAttribute("placeholder", "Nhập năm");




    buttonBai11.innerHTML = "Kết quả";
    demo.appendChild(buttonBai11);

    buttonBai11.onclick = () => {

        const d = Date.parse(inputM.value * 1 + " " + inputD.value * 1 + "," + inputY.value * 1);
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        const db = new Date(d - day); //day before
        const da = new Date(day + d); //day after
        buttonBai11.innerHTML = "Ngày hôm trước đó: ngày " + db.getDate() + " Tháng " + (db.getMonth() + 1) + " Năm " + db.getFullYear() + "<br>" + "Ngày hôm sau: ngày " + da.getDate() + " Tháng " + (da.getMonth() + 1) + " Năm " + da.getFullYear();
        console.log(inputM.value * 1 + " " + inputD.value * 1 + "," + inputY.value * 1);

    }


    function setAttributeForElement(element) {
        Object.assign(element, {

            type: "number"
        })
        demo.appendChild(element);
    }

}
// BÀI 2
document.getElementById("li_bai2").onclick = () => {
    demo.innerHTML = "";
    const inputD = createElement("input");
    const inputM = createElement("input");
    const inputY = createElement("input");
    const buttonBai11 = createElement("button");
    // const tieudeBai11 = createElement("");
    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 2: Viết chương trình nhập vào ngày, tháng, năm. Cho biết tháng đó có bao nhiêu ngày."
    demo.appendChild(heading);
    setAttributeForElement(inputD);
    setAttributeForElement(inputM);
    setAttributeForElement(inputY);
    inputD.setAttribute("placeholder", "Nhập ngày");
    inputM.setAttribute("placeholder", "Nhập tháng");
    inputY.setAttribute("placeholder", "Nhập năm");




    buttonBai11.innerHTML = "Kết quả";
    demo.appendChild(buttonBai11);

    buttonBai11.onclick = () => {

        const d = Date.parse(inputM.value * 1 + " " + inputD.value * 1 + "," + inputY.value * 1);
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const year = day * 365;
        const getDays = (year, month) => {
            return new Date(year, month, 0).getDate();
        };
        buttonBai11.innerHTML = "Tháng vừa nhập liệu có: " + getDays(inputY.value * 1, inputM.value * 1) + " ngày.";

    }


    function setAttributeForElement(element) {
        Object.assign(element, {

            type: "number"
        })
        demo.appendChild(element);
    }

}
document.getElementById("li_bai3").onclick = () => {

    demo.innerHTML = "";
    const inputBai11 = createElement("input");

    const buttonBai11 = createElement("button");
    // const tieudeBai11 = createElement("");
    const heading = document.createElement("h4");
    heading.innerHTML = "BÀI 3: Nhập số nguyên có 3 chữ số, in ra cách đọc nó."
    demo.appendChild(heading);
    setAttributeForElement(inputBai11);




    buttonBai11.innerHTML = "Kết quả";
    demo.appendChild(buttonBai11);

    buttonBai11.onclick = () => {
        var text = "";
        var v = inputBai11.value * 1;//v is a value
        if (v > 99 && v < 1000) {


            const arrayTram = ["một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
            const arrayChuc = ["một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
            const arrayDonVi = ["mốt", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

            var hangTram = Math.floor(v / 100);
            var hangChuc = Math.floor((v % 100) / 10);
            var hangDonVi = (v % 100) % 10;

            if (hangDonVi == 0 && hangChuc == 0) {
                text += arrayTram[hangTram - 1] + " trăm ";
            } else if (hangDonVi == 0 && hangChuc == 1) {
                text += arrayTram[hangTram - 1] + " trăm mười ";
            }

            else if (hangDonVi == 0 && hangChuc != 0) {
                text += arrayTram[hangTram - 1] + " trăm " + arrayChuc[hangChuc - 1] + " mươi";
            } else if (hangDonVi != 0 && hangChuc == 1) {
                text += arrayTram[hangTram - 1] + " trăm " + "mười " + arrayChuc[hangDonVi - 1];
            }

            else if (hangDonVi != 0 && hangChuc != 0) {
                text += arrayTram[hangTram - 1] + " trăm " + arrayChuc[hangChuc - 1] + " mươi " + arrayDonVi[hangDonVi - 1];
            }
            else if (hangChuc == 0 && hangDonVi != 0) {
                text += arrayTram[hangTram - 1] + " trăm lẻ " + arrayChuc[hangDonVi - 1];

            } else if (hangChuc == 1) {
                text += arrayTram[hangTram - 1] + " mười " + arrayChuc[hangDonVi - 1];

            }
            console.log(text)


            buttonBai11.innerHTML = text;


        } else {
            alert("Nhập vào số có 3 chữ số");
        }
    }


    function setAttributeForElement(element) {
        Object.assign(element, {
            placeholder: "Nhập số nguyên",
            type: "number"
        })
        demo.appendChild(element);
    }


}
document.getElementById("li_bai4").onclick = () => {
    var school_x = 0;
    var school_y = 0;
    var st1_name = "";
    var st1_x = 0;
    var st1_y = 0;
    var d1 = Math.sqrt(Math.pow((school_x - st1_x), 2) + Math.pow((school_y - st1_y), 2))
    var st2_name = "";
    var st2_x = 0;
    var st2_y = 0;
    var d2 = Math.sqrt(Math.pow((school_x - st2_x), 2) + Math.pow((school_y - st2_y), 2))
    var st3_name = "";
    var st3_x = 0;
    var st3_y = 0;
    var d3 = Math.sqrt(Math.pow((school_x - st3_x), 2) + Math.pow((school_y - st3_y), 2))

    demo.innerHTML = "";


    // STUDENT 1
    const H6_ELEMENT_1 = document.createElement("h6");
    H6_ELEMENT_1.innerHTML = "Sinh viên 1:"
    const div_st1 = document.createElement("div");
    st1_input_name = document.createElement("input");
    st1_input_x = document.createElement("input");
    st1_input_y = document.createElement("input");
    st1_input_name.setAttribute("type", "text");
    st1_input_name.setAttribute("placeholder", "Nhập tên");
    st1_input_x.setAttribute("type", "number");
    st1_input_x.setAttribute("placeholder", "Nhập tọa độ X");
    st1_input_y.setAttribute("type", "number");
    st1_input_y.setAttribute("placeholder", "Nhập tọa độ Y");
    div_st1.appendChild(H6_ELEMENT_1);
    div_st1.appendChild(st1_input_name);
    div_st1.appendChild(st1_input_x);
    div_st1.appendChild(st1_input_y);
    demo.appendChild(div_st1);
    // STUDENT 2
    const H6_ELEMENT_2 = document.createElement("h6");
    H6_ELEMENT_2.innerHTML = "Sinh viên 2:"
    const div_st2 = document.createElement("div");
    st2_input_name = document.createElement("input");
    st2_input_x = document.createElement("input");
    st2_input_y = document.createElement("input");
    st2_input_name.setAttribute("type", "text");
    st2_input_name.setAttribute("placeholder", "Nhập tên");
    st2_input_x.setAttribute("type", "number");
    st2_input_x.setAttribute("placeholder", "Nhập tọa độ X");
    st2_input_y.setAttribute("type", "number");
    st2_input_y.setAttribute("placeholder", "Nhập tọa độ Y");
    div_st2.appendChild(H6_ELEMENT_2);
    div_st2.appendChild(st2_input_name);
    div_st2.appendChild(st2_input_x);
    div_st2.appendChild(st2_input_y);
    demo.appendChild(div_st2);
    // STUDENT 3
    const H6_ELEMENT_3 = document.createElement("h6");
    H6_ELEMENT_3.innerHTML = "Sinh viên 3:"
    const div_st3 = document.createElement("div");
    st3_input_name = document.createElement("input");
    st3_input_x = document.createElement("input");
    st3_input_y = document.createElement("input");
    st3_input_name.setAttribute("type", "text");
    st3_input_name.setAttribute("placeholder", "Nhập tên");
    st3_input_x.setAttribute("type", "number");
    st3_input_x.setAttribute("placeholder", "Nhập tọa độ X");
    st3_input_y.setAttribute("type", "number");
    st3_input_y.setAttribute("placeholder", "Nhập tọa độ Y");
    div_st3.appendChild(H6_ELEMENT_3);
    div_st3.appendChild(st3_input_name);
    div_st3.appendChild(st3_input_x);
    div_st3.appendChild(st3_input_y);
    demo.appendChild(div_st3);
    // SCHOOL
    const H6_ELEMENT_4 = document.createElement("h6");
    H6_ELEMENT_4.innerHTML = "TỌA ĐỘ TRƯỜNG HỌC:"
    const div_school = document.createElement("div");

    school_input_x = document.createElement("input");
    school_input_y = document.createElement("input");


    school_input_x.setAttribute("type", "number");
    school_input_x.setAttribute("placeholder", "Nhập tọa độ X");
    school_input_y.setAttribute("type", "number");
    school_input_y.setAttribute("placeholder", "Nhập tọa độ Y");
    div_school.appendChild(H6_ELEMENT_4);

    div_school.appendChild(school_input_x);
    div_school.appendChild(school_input_y);
    demo.appendChild(div_school);

    btn_section4 = document.createElement("button");
    btn_section4.innerHTML = "Sinh Viên Xa Nhất"
    demo.appendChild(btn_section4);


    btn_section4.onclick = function () {

        school_x = school_input_x.value*1;
        school_y = school_input_y.value*1;
        st1_name = st1_input_name.value;
        st1_x = st1_input_x.value*1;
        st1_y = st1_input_y.value*1;
        st2_name = st2_input_name.value;
        st2_x = st2_input_x.value*1;
        st2_y = st2_input_y.value*1;
        st3_name = st3_input_name.value;
        st3_x = st3_input_x.value*1;
        st3_y = st3_input_y.value*1;
        
        
        
        d1 = Math.sqrt(Math.pow((school_x - st1_x), 2) + Math.pow((school_y - st1_y), 2));
        d2 = Math.sqrt(Math.pow((school_x - st2_x), 2) + Math.pow((school_y - st2_y), 2));
        d3 = Math.sqrt(Math.pow((school_x - st3_x), 2) + Math.pow((school_y - st3_y), 2));

        if (school_x != 0 && school_y != 0 && st1_x != 0 && st1_y != 0 && st2_x != 0 && st2_y != 0 && st3_x != 0 && st3_y != 0){
            if(d1>d2 && d1>d3){
                btn_section4.innerHTML = "SV xa nhất:" + st1_name;
            } else if (d2 > d1 && d2 > d3){
                btn_section4.innerHTML = "SV xa nhất:" + st2_name;
            } else {
                btn_section4.innerHTML = "SV xa nhất:" + st3_name;
            }
            
        }else {
            alert("Nhập đủ thông tin !")
        }
    }




}
// set option 
function setOption(element, value, content) {
    element.setAttribute("value", value);
    element.innerHTML = value;
}
// FUNCTION DUNG CHUNG
function createElement(element) {
    return document.createElement(element);
}
