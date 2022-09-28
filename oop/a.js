let obj=[];
            str=prompt("nhap vao chuoi ki tu");
            for(let i=0;i<str.length;i++) {
                if(65<=str[i].charCodeAt() && str[i].charCodeAt() <=90) {
                    obj.push(str[i].toLowerCase());
                } else { 
                    obj.push(str[i].toUpperCase());
                }
            }
            document.write(obj.join(""));
    



  