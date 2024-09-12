import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';

const GitHubContributions = () => {
  const tooltipId = "github-contributions-tooltip";

  return (
    <div className="flex flex-col items-center mt-5 p-6 rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">GitHub Contributions</h2>
      <GitHubCalendar
        username="parlii"
        blockSize={15}
        blockMargin={5}
        blockRadius={3}
        fontSize={16}
        colorScheme="light"
        hideColorLegend={true}
        renderBlock={(block, activity) => 
          React.cloneElement(block, {
            'data-tooltip-id': tooltipId,
            'data-tooltip-content': `${activity.date}: ${activity.count} contributions`,
          })
        }
      />
      <Tooltip id={tooltipId} />
    </div>
  );
};

export default GitHubContributions;