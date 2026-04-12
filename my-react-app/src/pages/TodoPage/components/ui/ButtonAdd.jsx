export default function ButtonAdd({ Handleclick }) {
  return (
    <button
      onClick={Handleclick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '12px',
        fontFamily: "'Syne', sans-serif",
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        borderRadius: '12px',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        color: 'white',
        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.45)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg
        width='15'
        height='15'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <line x1='12' y1='5' x2='12' y2='19' />
        <line x1='5' y1='12' x2='19' y2='12' />
      </svg>
      Добавить
    </button>
  );
}
