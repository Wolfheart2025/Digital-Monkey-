export enum Priority {
  Medium = 'Media',
  High = 'Alta',
  VeryHigh = 'Muy Alta'
}

export interface AuditPoint {
  title: string;
  description: string;
  iconName: string;
}

export interface SwotItem {
  category: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  points: string[];
}

export interface FunnelStage {
  stage: 'Top' | 'Middle' | 'Bottom';
  title: string;
  actions: string[];
  color: string;
}

export interface ActionItem {
  element: string;
  situation: string;
  priority: Priority;
  action: string;
}
