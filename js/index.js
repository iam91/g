window.onload = function(){

	pie1 = {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['45%', '40%'],
            data:[
                {value:335, name:''},
                {value:310, name:''},
                {value:274, name:''},
                {value:235, name:''},
                {value:400, name:''}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#2c343c'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        };

   	pie2 = {
            name:'',
            type:'pie',
            radius : '45%',
            center: ['50%', '50%'],
            data:[
                {value:274, name:''},
                {value:235, name:''},
                {value:400, name:''}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#2c343c'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        };

	option = {
	    backgroundColor: '#2c343c',

	    geo: {
	    	left: '10%'
	    },

	    graphic: {
	    	left: '10%'
	    },

	    title: {
	        text: 'Customized Pie',
	        left: 'center',
	        top: 20,
	        textStyle: {
	            color: '#ccc'
	        }
	    },

	    visualMap: {
	        show: false,
	        min: 80,
	        max: 600,
	        inRange: {
	            colorLightness: [0, 1]
	        }
	    },
	    series : [
	    	pie1,pie2
	    ]
	};

	var fig = document.querySelector('#fig');

	var figChart1 = echarts.init(fig);
	
	figChart1.setOption(option);
};
