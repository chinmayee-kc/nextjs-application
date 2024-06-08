
export interface Bcf {
  id: number;
  name: string;
  
}

export interface UseCase {
  id: number; 
  name: string;
  createdAt: string;
  bcfs: Bcf[]; 
}
