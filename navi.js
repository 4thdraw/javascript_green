const navi =[
           {
                text :"네이버",
                link :"http://www.naver.com",
                etext  : "naver"
            },
            {
                text :"다음",
                link :"http://www.daum.net",
                etext : ""
            }
            ]
console.log(navi[0 * 1].text);
//네이버 다음
console.log(navi[0].text, navi[1].text)
//네이버의 링크값은 http://www.naver.com

console.log(`${navi[0].text}의 링크값은 ${navi[0].link}`)

console.log( navi[0].text + "의 링크값은 " + navi[0].link )
console.log( navi[0].text, "의 링크값은" , navi[0].link )