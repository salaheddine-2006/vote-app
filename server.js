const express = require('express');
const cors = require('cors');
const VotingSystem = require('./votingLogic');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize voting system
const votingSystem = new VotingSystem();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// POST /vote - Vote for option A or B
app.post('/vote', (req, res) => {
  try {
    const { option } = req.body;
    
    if (!option) {
      return res.status(400).json({ error: 'Option is required' });
    }

    const upperOption = option.toUpperCase();
    votingSystem.addVote(upperOption);
    
    res.json({ 
      success: true, 
      message: `Vote for option ${upperOption} recorded`,
      results: votingSystem.getResults()
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET /results - Get current voting results
app.get('/results', (req, res) => {
  res.json(votingSystem.getResults());
});

// POST /reset - Reset all votes
app.post('/reset', (req, res) => {
  votingSystem.reset();
  res.json({ 
    success: true, 
    message: 'Votes have been reset',
    results: votingSystem.getResults()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DevOps Voting App running on port ${PORT}`);
  console.log(`📊 Visit http://localhost:${PORT} to vote`);
});

module.exports = app;
