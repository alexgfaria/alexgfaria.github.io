document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });


const rings = document.querySelectorAll('.ring'),
    spin  = document.querySelector('.spin'),
	degs  = [0, 45, 90, 135, 180, 225, 270, 315, 360]
	//degs  = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360]

window.onload = () => {
    rings.forEach((el, i) => {
        let obj = {},
            arr = obj.arr = []

        el.querySelectorAll('.slot').forEach((el) => {
            let id = el.getAttribute('id')
            obj.arr.push(id)
        })

        obj.next = arr[arr.length-2]
        obj.curr = arr[arr.length-1]
        obj.prev = arr[0]
        obj.deg = 0

        window[`ring${i}`] = obj
    })

    update()
}

spin.addEventListener('click', rotate)

function rotate() {
    rings.forEach((el, i) => {
        let obj  = window[`ring${i}`],
            deg  = obj.deg,
            curr = obj.curr,
            arr  = obj.arr,
            res  = deg - degs[rnd(0, degs.length)] * rnd(1, 50)

        el.style.transform = `rotateX(${res}deg)`
        obj.deg = res

        let cnt = Math.abs(res - deg) / (360/arr.length),
            tmp = arr.slice(arr.indexOf(curr)),
            next,
            prev

        for (let i = 0; i <= cnt; i++) {
            tmp.push.apply(tmp, arr)
            curr = tmp[i]
            next = tmp[i - 1]
            prev = tmp[i + 1]
        }

        obj.curr = curr

        if (cnt > 0) {
            obj.next = next
            obj.prev = prev
        }

        window[`ring${i}`] = obj
    })

    setTimeout(() => {
        update()
    }, 2825)
}

/*function update() {
    const results = document.querySelector('.results')

    results.innerHTML = ''
    results.insertAdjacentHTML('beforeend',
        `<div class="result">${ring0.next} ${ring1.curr} ${ring2.prev}</div>
		 	 <div class="result">${ring0.curr} ${ring1.curr} ${ring2.curr}</div>
			 <div class="result">${ring0.prev} ${ring1.curr} ${ring2.next}</div>`)
}*/

function rnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}


function play(){
    var audio = document.getElementById("audio");
    audio.playbackRate = 1.8;
    audio.play();
}



const button = document.querySelector('button');

button.addEventListener('click', _ => {
  document.getElementById('sidebar').classList.toggle('collapsed');
})




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }