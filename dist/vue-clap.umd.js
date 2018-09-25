(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueClapper = {})));
}(this, (function (exports) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".canvas { display: flex; justify-content: center; align-items: center; width: 300px; height: 300px; position: relative; } .canvas .total-counter { display: flex; justify-content: center; align-items: center; width: 100%; position: absolute; margin-top: -90px; color: gray; font-family: sans-serif; font-size: 16px; } .canvas .total-counter.fader { animation: fade-in 1400ms forwards; } .canvas .clap-container { display: flex; justify-content: center; align-items: center; position: absolute; width: 60px; height: 60px; border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 50%; z-index: 2; background: #fff; cursor: pointer; } .canvas .clap-container .clap-icon { font-size: 30px; color: #03a87c; width: 30px; height: 30px; } .canvas .clap-container:hover { border: 1px solid #03a87c; } .canvas .clap-container.scale { animation: scaleAndBack 700ms forwards; } .canvas .click-counter { display: flex; justify-content: center; align-items: center; width: 35px; height: 35px; position: absolute; top: 132px; background-color: #03a87c; border-radius: 50%; z-index: 1; } .canvas .click-counter .counter { font-family: sans-serif; font-size: 14px; color: #fff; } .canvas .click-counter.first-active { animation: first-bump-in 1s forwards; } .canvas .click-counter.active { animation: bump-in 1s forwards; } .canvas .clap-container-sonar { width: 60px; height: 60px; background: #03a87c; border-radius: 50%; position: absolute; opacity: 0; z-index: 0; } .canvas .hover-active { animation: sonar-wave 2s forwards; } .canvas .particles-container { display: flex; justify-content: center; align-items: center; width: 60px; height: 60px; position: absolute; /* border: 1px solid gray; */ /* z-index: 3; */ } .canvas .particles-container .triangle { border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 10px solid red; border-bottom: 4px solid transparent; position: absolute; } .canvas .particles-container .triangle .square { width: 5px; height: 5px; background: #03a87c; position: absolute; left: -15px; top: 0; } .canvas .particles-container .pop-top { animation: pop-top 1s forwards; } .canvas .particles-container .pop-top-left { animation: pop-top-left 1s forwards; } .canvas .particles-container .pop-top-right { animation: pop-top-right 1s forwards; } .canvas .particles-container .pop-bottom-right { animation: pop-bottom-right 1s forwards; } .canvas .particles-container .pop-bottom-left { animation: pop-bottom-left 1s forwards; } @keyframes sonar-wave { 0% { opacity: 0.7; } 100% { transform: scale(1.4); opacity: 0; } } @keyframes fade-in { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1; } } @keyframes pop-top { 0% { transform: translate(0, 0) rotate(0); opacity: 0.4; } 100% { transform: translate(0, -100px) rotate(0); opacity: 0; } } @keyframes pop-top-left { 0% { transform: translate(0, 0) rotate(-55deg); opacity: 0.4; } 100% { transform: translate(-100px, -50px) rotate(-55deg); opacity: 0; } } @keyframes pop-top-right { 0% { transform: translate(0, 0) rotate(55deg); opacity: 0.4; } 100% { transform: translate(100px, -50px) rotate(55deg); opacity: 0; } } @keyframes pop-bottom-right { 0% { transform: translate(0, 0) rotate(135deg); opacity: 0.4; } 100% { transform: translate(70px, 80px) rotate(135deg); opacity: 0; } } @keyframes pop-bottom-left { 0% { transform: translate(0, 0) rotate(-135deg); opacity: 0.4; } 100% { transform: translate(-70px, 80px) rotate(-135deg); opacity: 0; } } @keyframes first-bump-in { 0% { transform: translateY(-65px); opacity: 1; } 50% { transform: translateY(-80px); opacity: 1; } 100% { transform: translateY(-100px); opacity: 0; } } @keyframes bump-in { 0% { transform: translateY(-80px) scale(0.9); opacity: 1; } 50% { transform: translateY(-80px) scale(1); opacity: 1; } 100% { transform: translateY(-100px) scale(1); opacity: 0; } } @keyframes scaleAndBack { 0% { transform: scale(1); } 50% { transform: scale(1.15); } 100% { transform: scale(1); } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();








































































  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"canvas"},[_c('div',{ref:"totalClickCounter",staticClass:"total-counter",attrs:{"id":"totalCounter"}},[_vm._v(" "+_vm._s(_vm.displayTotal)+" ")]),_vm._v(" "),_c('div',{staticClass:"clap-container",attrs:{"id":"clap"}},[_c('i',{staticClass:"clap-icon",class:_vm.iconClass})]),_vm._v(" "),_c('div',{ref:"clicker",staticClass:"click-counter",attrs:{"id":"clicker"}},[_c('span',{staticClass:"counter"})]),_vm._v(" "),_c('div',{staticClass:"clap-container-sonar",attrs:{"id":"sonar-clap"}}),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2)])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"particles-container",attrs:{"id":"particles"}},[_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"particles-container",attrs:{"id":"particles-2"}},[_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"particles-container",attrs:{"id":"particles-3"}},[_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})]),_vm._v(" "),_c('div',{staticClass:"triangle"},[_c('div',{staticClass:"square"})])])}],
    name: 'VueClap',
    props: {
      iconClass: String,
      totalCount: {
          type: Number,
          default: 0,
      },
    },
    computed: {
      displayTotal: function displayTotal() {
          return this.format(this.totalCount);
      },
    },
    data: function data () {
      return {
        accCounter: 0,
        minDeg: 1,
        maxDeg: 72,
        particlesClasses: [
        	{
            	class: "pop-top"
            },
            {
            	class: "pop-top-left"
            },
            {
            	class: "pop-top-right"
            },
            {
            	class: "pop-bottom-right"
            },
            {
            	class: "pop-bottom-left"
            } ]
      }
    },
    methods: {
      round: function round(n, precision) {
        var prec = Math.pow(10, precision);
        return Math.round(n * prec) / prec;
      },
      format: function format(n) {
        var base = Math.floor(Math.log( Math.abs(n)) / Math.log(1000));
        var suffix = 'kmb'[base - 1];
        return suffix ? this.round(n / Math.pow(1000, base), 1) + suffix : '' +n;
      },
      upClickCounter: function upClickCounter() {
          var clickCounter = this.$refs.clicker; // document.getElementById("clicker");
          var totalClickCounter = this.$refs.totalClickCounter; // document.getElementById('totalCounter');

      	this.accCounter ++;
      	clickCounter.children[0].innerText = '+' + this.accCounter;
          totalClickCounter.innerText = this.totalCount + this.accCounter;
          // this.totalCount++

          if (clickCounter.classList.contains('first-active')) {
      		this.runAnimationCycle(clickCounter, 'active');
          } else {
          	this.runAnimationCycle(clickCounter, 'first-active');
          }
         	this.runAnimationCycle(totalClickCounter, 'fader');
      },

      runAnimationCycle: function runAnimationCycle(el, className, duration) {
      	if (el && !el.classList.contains(className)) {
          	el.classList.add(className);
          } else {
          	el.classList.remove(className);
              void el.offsetWidth; // Trigger a reflow in between removing and adding the class name
              el.classList.add(className);
          }
      },

      runParticleAnimationCycle: function runParticleAnimationCycle(el, className, duration) {
      	if (el && !el.classList.contains(className)) {
          	el.classList.add(className);
              setTimeout(function () {
              	el.classList.remove(className);
              }, duration);
          }
      },

      animateParticles: function animateParticles(particles, dur) {
      	var this$1 = this;

      	this.addRandomParticlesRotation(particles.id, this.minDeg, this.maxDeg);
          for(var i = 0; i < this.particlesClasses.length; i++) {
          	this$1.runParticleAnimationCycle(particles.children[i], this$1.particlesClasses[i].class, dur);
          }
          // Boolean functionality only to activate particles2, particles3 when needed
          particles.classList.add('animating');
          setTimeout(function () {
          	particles.classList.remove('animating');
          }, dur);
      },

      getRandomInt: function getRandomInt(min, max) {
      	return Math.floor(Math.random() * (max - min  + 1)) + min;
      },

      addRandomParticlesRotation: function addRandomParticlesRotation(particlesName, minDeg, maxDeg) {
      	var particles = document.getElementById(particlesName);
        var randomRotationAngle = this.getRandomInt(minDeg, maxDeg) + 'deg';
      	particles.style.transform = "rotate(" + randomRotationAngle + ")";
      }
    },
    mounted: function mounted () {
      var this$1 = this;

      console.log('I am alive');

      document.getElementById('clap').onmouseover = function () {
      	var sonarClap = document.getElementById('sonar-clap');
          sonarClap.classList.add('hover-active');
          setTimeout(function () {
          	sonarClap.classList.remove('hover-active');
          }, 2000);
      };

      document.getElementById('clap').onclick = function () {
      	var clap = document.getElementById('clap');
          var clickCounter = document.getElementById("clicker");
      	var particles = document.getElementById('particles');
          var particles2 = document.getElementById('particles-2');
          var particles3 = document.getElementById('particles-3');
          clap.classList.add('clicked');
          this$1.upClickCounter();

          this$1.runAnimationCycle(clap, 'scale');

          if (!particles.classList.contains('animating')) {
          	this$1.animateParticles(particles, 700);
          } else if(!particles2.classList.contains('animating')){
          	this$1.animateParticles(particles2, 700);
          } else if(!particles3.classList.contains('animating')) {
          	this$1.animateParticles(particles3, 700);
          }

          this$1.$emit('clap', this$1.totalCount);
      };
    }
  }

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VueClap', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
