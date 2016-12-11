window.onload = function(){

	var r = window.innerHeight / window.innerWidth;

	data1 = [
        {value:100, name:''},
        {value:105, name:''},
        {value:110, name:''},
        {value:108, name:''},
        {value:105, name:''},
	];

	data2 = [
        {value:100, name:''},
        {value:105, name:''},
        {value:110, name:''},
        {value:105, name:''},
        {value:108, name:''},
        {value:112, name:''},
        {value:110, name:''},
        {value:105, name:''},
        {value:111, name:''}
	];

	data3 = [
        {value:100, name:''},
        {value:95, name:''},
        {value:102, name:''},
        {value:98, name:''},
        {value:103, name:''},
	];

	pie1 = {
            name:'',
            type:'pie',
            radius : '60%',
            center: ['50%', '42%'],
            data: data1,
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

    var pie2 = {};
    var pie3 = {};
    for(key in pie1){
    	pie2[key] = pie1[key];
    	pie3[key] = pie1[key];
    }
    pie2.data = data2;
    pie2.radius = '50%';
    pie3.data = data3;
    pie3.radius = '32%';

	option = {
	    backgroundColor: '#2c343c',

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
	    	pie1, pie2, pie3
	    ]
	};

	var fig = document.querySelector('#fig');
	document.body.style.height = document.body.clientWidth * r + 'px';

	var figChart1 = echarts.init(fig);
	
	figChart1.setOption(option);
};
