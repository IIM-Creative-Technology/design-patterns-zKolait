document.addEventListener('keydown', function(e) {
    imageManager.hasOwnProperty(e.code) && imageManager.execute(e.code)
})

let imageManager = {
    image: document.querySelector('.twitter-logo'),
    speed: 20,
    ArrowUp: function () {
        if (this.image.offsetTop <= 0) {
            this.ArrowDown()
        } else {
            this.image.style.top = this.image.offsetTop - this.speed + 'px'
        }
    },
    ArrowLeft: function () {
        if (this.image.offsetLeft <= 0) {
            this.ArrowRight()
        } else {
            this.image.style.left = this.image.offsetLeft - this.speed + 'px'
        }
    },
    ArrowRight: function () {
        if (this.image.offsetLeft + this.image.width >= window.innerWidth) {
            this.ArrowLeft()
        } else {
            this.image.style.left = this.image.offsetLeft + this.speed + 'px'
        }
    },
    ArrowDown: function () {
        if ((this.image.offsetTop + this.image.height) >= window.innerHeight) {
            this.ArrowUp()
        } else {
            this.image.style.top = this.image.offsetTop + this.speed + 'px'
        }
    }
}

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

setInterval(function () {
    let commands = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown']
    let commandIndex = Math.floor(Math.random() * commands.length)

    imageManager.execute(commands[commandIndex])
}, 10)