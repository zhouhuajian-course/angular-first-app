// 规范数据
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  // 加利福尼亚州 CA
  state: string;
  photo: string;
  // 5
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}