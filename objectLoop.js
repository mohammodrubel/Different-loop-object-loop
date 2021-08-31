// for (var i = 0; i<10;i++){}
// for (const student of students){} এরের উপরে ইমপ্লিমেন্ট করার জন্য সহজ সিস্টেম এই ফোর অফ লুপ 
// for (const studens in students){} অবজেক্ট এর উপরে ইমপ্লিমেন্ট করার জন্য সহস সিস্টেম এর ইন লুপ 

const myObj = {
    name:'fardin',
    roll:2345,
    class:'seven',
    versity:'UK UNIVERSITY'
}


for (const inform in myObj){
    console.log(inform,myObj[inform])
}


for (const inform in myObj){
    console.log(myObj[inform])
}

const key = Object.keys(myObj)
    for (const proparty of key){
        console.log(proparty,myObj[proparty])
    }