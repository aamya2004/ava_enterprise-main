import { Line } from "react-chartjs-2";

const PerformanceGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "#4A56DE",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderDash: [6, 6], // Set the borderDash property for dashed line
        borderJoinStyle: 'round',
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86],
        fill: false,
        borderColor: "#4A56DE",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderJoinStyle: 'round',
      },
    ],
  };

  return (
    <div>
      <Line
        data={data}
        height={370}
        width={850}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
                grid : {
                    display:false,
                },
              ticks: {
                font: {
                  size: 12,
                },
              },
            },
            y: {
                grid : {
                    display:true,
                    color: "rgba(255, 255, 255, 0.1)",
                },
              ticks: {
                font: {
                  size: 12,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PerformanceGraph;
