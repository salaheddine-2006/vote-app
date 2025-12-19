// logic.test.js - Unit tests for voting logic

const VotingSystem = require('./votingLogic');

describe('VotingSystem', () => {
  let votingSystem;

  beforeEach(() => {
    votingSystem = new VotingSystem();
  });

  test('should initialize with zero votes', () => {
    const results = votingSystem.getResults();
    expect(results.optionA).toBe(0);
    expect(results.optionB).toBe(0);
    expect(results.total).toBe(0);
  });

  test('should add vote for option A', () => {
    votingSystem.addVote('A');
    const results = votingSystem.getResults();
    expect(results.optionA).toBe(1);
    expect(results.optionB).toBe(0);
  });

  test('should add vote for option B', () => {
    votingSystem.addVote('B');
    const results = votingSystem.getResults();
    expect(results.optionA).toBe(0);
    expect(results.optionB).toBe(1);
  });

  test('should calculate total votes correctly', () => {
    votingSystem.addVote('A');
    votingSystem.addVote('A');
    votingSystem.addVote('B');
    const results = votingSystem.getResults();
    expect(results.total).toBe(3);
  });

  test('should throw error for invalid option', () => {
    expect(() => {
      votingSystem.addVote('C');
    }).toThrow('Invalid option. Must be A or B');
  });

  test('should reset votes correctly', () => {
    votingSystem.addVote('A');
    votingSystem.addVote('B');
    votingSystem.reset();
    const results = votingSystem.getResults();
    expect(results.total).toBe(0);
  });
});
