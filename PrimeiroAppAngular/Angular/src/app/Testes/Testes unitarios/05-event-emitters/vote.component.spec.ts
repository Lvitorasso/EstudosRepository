import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('deve emitir o votechanged quando votado', () => {
    let total: any = null;
    component.voteChanged.subscribe(totalVotos => total = totalVotos);

    component.upVote();

    expect(total).toBe(1);
  });
});