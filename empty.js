<div>
  {cards.map((card, i) => (
    isCards && <Slider key={card.id} question={card.question} answer={card.answer} currLength={i+1} total={cards.length}/>
  ))}
</div>