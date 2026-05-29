const particles = Array.from({ length: 40 });

const Particles = () => {
  return (
    <div className="particles-container">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
