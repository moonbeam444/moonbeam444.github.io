//Oneida County
new Chart(document.getElementById("oneida-line-chart"), {
    type: 'line',
    data: {
        labels: ["11/24/20",
            "11/27/20",
            "12/05/20",
            "12/15/20",
            "12/16/20",
            "12/17/20",
            "12/20/20",
            "12/28/20",
            "01/04/21"
        ],
        datasets: [{
            data: [1151,
                1355,
                2551,
                3946,
                4212,
                4472,
                5043,
                4936,
                5259
            ],
            label: "Oneida",
            borderColor: "#3e95cd",
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Active Cases Per Day: Oneida'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:true
                }
            }],
            yAxes: [{
                gridLines: {
                    display:true
                }
            }]
        }
    }
});

//Oneida County
new Chart(document.getElementById("herkimer-line-chart"), {
    type: 'line',
    data: {
        labels: ["11/24/20",
            "11/27/20",
            "12/05/20",
            "12/15/20",
            "12/16/20",
            "12/17/20",
            "12/20/20",
            "12/28/20",
            "01/04/21"
        ],
        datasets: [{
            data: [160,
                198,
                311,
                525,
                527,
                538,
                676,
                807,
                1088
            ],
            label: "Herkimer",
            borderColor: "#3cba9f",
            fill: false
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Active Cases Per Day: Herkimer'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display:true
                }
            }],
            yAxes: [{
                gridLines: {
                    display:true
                }
            }]
        }
    }
});

//Oneida and Herkimer County
new Chart(document.getElementById("oneida-herkimer-bar-chart"), {
    type: 'bar',
    data: {
        labels: ["11/24/20",
            "11/27/20",
            "12/05/20",
            "12/15/20",
            "12/16/20",
            "12/17/20",
            "12/20/20",
            "12/28/20",
            "01/04/21"
        ],
        datasets: [
            {
                label: "Oneida",
                backgroundColor: "#3e95cd",
                data: [141,
                    144,
                    158,
                    178,
                    180,
                    182,
                    211,
                    215,
                    243
                ]
            }, {
                label: "Herkimer",
                backgroundColor: "#3cba9f",
                data: [12,
                    12,
                    14,
                    15,
                    15,
                    15,
                    18,
                    21,
                    31
                ]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Cumulative Deaths Per Day and County'
        }
    }
});
