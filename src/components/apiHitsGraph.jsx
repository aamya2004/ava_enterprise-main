import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarGraph = () => {
  return (
    <div>
      <Bar 
        data={{
          labels: ["17 April", "18 April", "19 April", "20 April", "21 April"],
          datasets: [
            {
              label: "No of API Hits",
              data: [100, 400, 300, 400, 200],
              backgroundColor: ["#ff7e78", "#6be2be", "#b1c7df", "#6be2be", "#b1c7df"],
              borderWidth: 1
            },
          ]
        }}
        height={400}
        width={500}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display:false
              },
              ticks: {
                font: {
                  size: 12,

                }
              }
            },
            y: {
              grid: {
                color: "rgba(255, 255, 255, 0.9)", // White color with 50% opacity
                borderColor: "rgba(255, 255, 255, 0.9)", // White color with 50% opacity
                display: true,
              },
              border: {
                dash: [6,8],
              },
              ticks: {
                font: {
                  size: 12,
                  color: '#00000'
                },
              stepSize: 100,
              }
            }
          },
          elements: {
            bar: {
              borderRadius: 12, // Set border radius for bars
            }
          },
          layout: {
            padding: {
              left: 10, // Reduce the padding on the left side
              right: 10, // Reduce the padding on the right side
              top: 10,
              bottom: 10
            }
          },
        

          indexAxis: 'x', // Use x-axis as the index axis
          // barPercentage: 0.7, // Adjust the width of the bars
          categoryPercentage: 0.8 // Adjust the space between bars
        }}
      />
    </div>
  );
};

export default BarGraph;
