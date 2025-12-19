// votingLogic.js - Separated logic for easier testing

class VotingSystem {
  constructor() {
    this.votes = {
      A: 0,
      B: 0
    };
  }

  // Add a vote for option A or B
  addVote(option) {
    if (option !== 'A' && option !== 'B') {
      throw new Error('Invalid option. Must be A or B');
    }
    this.votes[option]++;
    return this.votes[option];
  }

  // Get current results
  getResults() {
    return {
      optionA: this.votes.A,
      optionB: this.votes.B,
      total: this.votes.A + this.votes.B
    };
  }

  // Reset votes (useful for testing)
  reset() {
    this.votes.A = 0;
    this.votes.B = 0;
  }
}

module.exports = VotingSystem;
