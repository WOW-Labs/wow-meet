import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

interface Cell {
  id: string;
  selected: boolean;
}

function TimeTable() {
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    function handleMouseUp() {
      setIsMouseDown(false);
    }

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function handleMouseDown() {
    setIsMouseDown(true);
  }

  function handleMouseEnter(cellId: string) {
    if (isMouseDown) {
      setSelectedCells((prevSelectedCells) => {
        const cellIndex = prevSelectedCells.findIndex((cell) => cell.id === cellId);
        if (cellIndex !== -1) {
          return prevSelectedCells;
        }
        return [
          ...prevSelectedCells,
          { id: cellId, selected: true },
        ];
      });
    }
  }

  function handleTouchStart(event: React.TouchEvent<HTMLTableDataCellElement>, cellId: string) {
    event.preventDefault();
    setIsMouseDown(true);
    handleMouseEnter(cellId);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLTableDataCellElement>, cellId: string) {
    if (isMouseDown) {
      event.preventDefault();
      handleMouseEnter(cellId);
    }
  }

  return (
    <div className={styles.timeTableContainer}>
      <table className={styles.timeTable}>
        <tbody>
          {[...Array(24)].map((_, hour) => (
            <tr className={styles.row} key={hour}>
              {[...Array(8)].map((_, minute) => {
                const cellId = `${hour}-${minute}`;
                const selectedCell = selectedCells.find((cell) => cell.id === cellId);
                const isSelected = selectedCell?.selected ?? false;

                return (
                  <td
                    className={`${styles.cell} ${isSelected && styles.selectedCell}`}
                    key={minute}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={() => handleMouseEnter(cellId)}
                    onMouseUp={() => setIsMouseDown(false)}
                    onTouchStart={(event) => handleTouchStart(event, cellId)}
                    onTouchMove={(event) => handleTouchMove(event, cellId)}
                    onTouchEnd={() => setIsMouseDown(false)}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>GDSC 7</div>
      <div className={styles.info}>현재까지 가장 많이 모일 수 있는 날</div>
      <div className={styles.tip}>타임테이블 활성화 영역을 터치해 참여자를 확인해보세요.</div>
      <div className={styles.table}>
        <TimeTable />
      </div>
      <div className={styles.btm}></div>
    </main>
  );
}
