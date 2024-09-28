// Array of motivational starts
const motivationalStarts = [
    'Believe in yourself',
    'You are capable of amazing things',
    'Every journey begins with a single step',
    'The harder you work',
    'Dream big and'
  ];
  
  // Array of actions
  const actions = [
    'never give up',
    'embrace the challenges',
    'keep pushing forward',
    'stay positive',
    'conquer your fears'
  ];
  
  // Array of encouraging ends
  const encouragingEnds = [
    'and success will follow.',
    'because you are destined for greatness.',
    'and the sky is the limit.',
    'and your efforts will be rewarded.',
    'and nothing can stop you.'
  ];
  function generateRandomMessage() {
    // Randomly select one element from each array
    const start = motivationalStarts[Math.floor(Math.random() * motivationalStarts.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const end = encouragingEnds[Math.floor(Math.random() * encouragingEnds.length)];
  
    // Construct the message
    const message = `${start}, ${action}, ${end}`;
  
    return message;
  }
  
// Generate and display the message
const inspirationalMessage = generateRandomMessage();
console.log(inspirationalMessage);

motivationalStarts.push('Your potential is limitless', 'Success starts with self-belief');
actions.push('take the leap', 'keep moving forward');
encouragingEnds.push('and you"ll reach the stars.', 'and watch your dreams unfold.');

const message = `${start}\n${action}\n${end}`;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Would you like an inspirational message? (yes/no): ', answer => {
    if (answer.toLowerCase() === 'yes') {
      console.log(inspirationalMessage);
    } else {
      console.log('No problem! Have a great day!');
    }
    readline.close();
  });
  
