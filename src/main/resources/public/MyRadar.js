Chart.defaults.font.size = 16;

let mychart = document.getElementById('myChart').getContext('2d');

        let thisChart = new Chart(myChart, {
            type: 'radar',
            data: {
                labels:['Emotional','Spiritual','Intellectual','Physical','Environmental','Financial','Occupational','Social'],
                datasets:[{
                    label:'My Wellness',
                    backgroundColor:"rgba(0,75,58,0.2)",
                    borderColor:"rgba(0,75,58,0.5)",
                    data:[6,8,5,7,4,3,4,9]
                }]
            },
            options: {
                scale: {
                    min: 1,
                    max: 10,
                    pointLabels: {
                        font:{
                            size: 16
                        }
                    },
                    ticks: {
                         backdropColor: "rgba(242,241,240,0.2)"
                    }
                }
            }
        });