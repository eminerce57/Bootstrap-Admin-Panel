const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400'],
      borderColor: 'rgb(213, 139, 221)',

      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );