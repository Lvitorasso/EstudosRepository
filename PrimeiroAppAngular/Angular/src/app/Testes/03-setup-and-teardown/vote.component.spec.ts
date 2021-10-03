import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  
  let component: VoteComponent;

  beforeEach(() =>{
    component = new VoteComponent();
  });

  it('deve incrementar o total quando votado', () => {
    // TRIPLO A

    // Arrange
    //let component = new VoteComponent();

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('deve diminuir o total quando desvotado', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});