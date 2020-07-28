import Vue from 'vue'
class Bus {
    constructor() {
        this.callbacks = {}
    }

    $on(name,fn) {
        this.callbacks[name] = this.callbacks[name] || []
        this.callbacks[name].push(fn)
    }
    $emit(name,args) {  
        if(this.callbacks[name]) {
            this.callbacks[name].forEach(cd => {
                cd(args)
            });
        }
    }
}
Vue.prototype.$bus = new Bus()