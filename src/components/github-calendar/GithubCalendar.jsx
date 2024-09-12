import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  // Define a custom tooltip function
  // const renderTooltip = (block, activity) => (
  //   <div>
  //     {activity.date}: {activity.count} contributions
  //   </div>
  // );

  return (
    <div className="flex flex-col items-center mt-5 p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      {/* GitHub Calendar with custom options */}
      <GitHubCalendar
        username="parlii" // Replace with your actual GitHub username
        blockSize={15} // Customize block size
        blockMargin={5} // Customize margin between blocks
        blockRadius={3} // Customize block border radius
        fontSize={16} // Adjust font size
        colorScheme="light" // Set to "light" or "dark"
        hideColorLegend={true} // Hide color legend for a cleaner look
        // renderBlock={renderTooltip} // Add a tooltip for each block
      />
    </div>
  );
};

export default GitHubContributions;
