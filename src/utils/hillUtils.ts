/**
 * hillUtils.ts
 * ---------------------
 * Utility functions for calculating hill positions, assigning hill types,
 * and identifying target hills for animation.
 *
 * Alan Roy
 * https://github.com/Alan21303/
 * Created: 2025-09-01
 */

export interface HillPosition {
  row: number;
  col: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
}

export interface HillUtilsConfig {
  rows?: number;
  gapY?: number;
  hillSize?: number;
  baseY?: number;
  screenWidth: number;
}

/**
 * Calculates positions, size, and opacity for a grid of hills
 */
export const calculateHillPositions = ({
  rows = 7,
  gapY = 20,
  hillSize = 200,
  baseY = 0,
  screenWidth,
}: HillUtilsConfig): HillPosition[] => {
  const hills: HillPosition[] = [];
  const firstTierRows = 3;

  for (let row = 0; row < rows; row++) {
    const size = hillSize + row * 15; // Hill size grows by row
    const stepX = size - 45; // Horizontal step between hills
    const cols = Math.ceil(screenWidth / stepX) + 1; // Hills needed to cover screen
    const horizontalOffset = row % 2 === 0 ? 0 : -(stepX / 2); // Stagger every other row

    for (let col = 0; col < cols; col++) {
      const opacity =
        row <= firstTierRows ? 0.2 + (row / (firstTierRows - 1)) * 0.5 : 1;

      hills.push({
        row,
        col,
        left: col * stepX + horizontalOffset,
        top: row * gapY + baseY,
        size,
        opacity,
      });
    }
  }

  return hills;
};

/**
 * Returns hill type or index based on row
 */
export const getHillItem = (row: number): number | "primary-hill" => {
  const rowItemMap: Record<number, number | "primary-hill"> = {
    0: 0,
    1: 0,
    2: 4,
    3: 1,
    4: 2,
    5: 5,
    6: 6,
  };
  return rowItemMap[row] || "primary-hill";
};

/**
 * Returns index of target hills for animation, or -1 if not a target
 */
export const isTargetHill = (row: number, col: number): number => {
  const targetHills = [
    { row: 4, col: 0 },
    { row: 4, col: 1 },
    { row: 5, col: 3 },
    { row: 5, col: 4 },
  ];
  return targetHills.findIndex((h) => h.row === row && h.col === col);
};
