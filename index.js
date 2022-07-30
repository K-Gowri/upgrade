// DOM
//console.log(document.querySelector("h1").innerText="iam a new content");
// 1st mantra
// function changeElement()
// {
//     document.querySelector("#one").style.backgroundColor="yellow";
//     document.querySelector("#one").style.borderRadius="500px";
//     document.querySelector("#one").style.boxShadow="0 0 20px black";
//     document.querySelector("#one").style.marginLeft="100px";
// }


{/* <button onclick="changeElement()"> Change Element</button> */}
    
// : "http://localhost:8080"







// project.js
let music=[
    {
        id:1,
        name:"Heat Waves",
        artist:"Glass animals",
        audioSrc:"Heat Waves Mixed.mp3",
        imageSrc:"heatwavs.jpg"
    },
    {
        id:2,
        name:"As it Was",
        artist:"Harry Styles",
        audioSrc:"As It Was - Harry Style ! English.mp3",
        imageSrc:"download.jpg"
    },

    {
        id:3,
        name:"until i found you",
        artist:"Stephen Sanchez",
        audioSrc:"Until I Found You ! Female Version.mp3",
        imageSrc:"until.jpg"
    },
    {
        id:4,
        name:"Dandelions",
        artist:"Ruth.B",
        audioSrc:"Dandelions.mp3",
        imageSrc:"Dandelions.jpg"
    },
    {
        id:5,
        name:"Love me like you do",
        artist:"Ellie Goulding",
        audioSrc:"Love Me Like You Do.mp3",
        imageSrc:"love.jpg"
    },

    {
        id:6,
        name:"Alone pt II",
        artist:"Alan Walker",
        audioSrc:"Alone Pt Ii-english song.mp3",
        imageSrc:"alone.jpg"
    }
]

for(let i=0;i<music.length;i++)
{


    let tile=document.createElement("div")
    tile.classList.add("tile");
    
    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");
    
    let img=document.createElement("img");
    img.src=music[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);
    
    let description=document.createElement("div");
    description.classList.add("description");
    
    let h2=document.createElement("h2");
    h2.append(music[i].name);
    description.append(h2);
    
    
    let h3=document.createElement("h3");
    h3.append(music[i].artist);
    description.append(h3);
    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(music[i]);

    });
    
    document.querySelector(".musics-list").append(tile);
    
}
function playMusic(music)
{
    
 document.querySelector(".player").style.marginLeft="0";
 document.querySelector(".main-thumbnail-img").src=music.imageSrc;
 document.querySelector(".song-name").innerText=music.name;
 document.querySelector(".song-artist").innerText=music.artist;
 document.querySelector(".audio").src=music.audioSrc;

 document.querySelector(".audio").play();



}
function closePlayer()
{
 document.querySelector(".player").style.marginLeft="100%";
 document.querySelector(".audio").pause();
}











































