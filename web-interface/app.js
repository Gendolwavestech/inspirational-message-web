const motivationalStarts = [
    'Believe in yourself',
    'You are capable of amazing things',
    'Every journey begins with a single step',
    'The harder you work',
    'Dream big and'
];

const actions = [
    'never give up',
    'embrace the challenges',
    'keep pushing forward',
    'stay positive',
    'conquer your fears'
];

const encouragingEnds = [
    'and success will follow.',
    'because you are destined for greatness.',
    'and the sky is the limit.',
    'and your efforts will be rewarded.',
    'and nothing can stop you.'
];

// Function to generate a random message
function generateRandomMessage() {
    const start = motivationalStarts[Math.floor(Math.random() * motivationalStarts.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const end = encouragingEnds[Math.floor(Math.random() * encouragingEnds.length)];
    
    return `${start}, ${action}, ${end}`;
}

// Get the button and message paragraph
const messageDisplay = document.getElementById('message');
const generateBtn = document.getElementById('generate-btn');

// Add event listener to button
generateBtn.addEventListener('click', () => {
    const randomMessage = generateRandomMessage();
    messageDisplay.textContent = randomMessage;
});
