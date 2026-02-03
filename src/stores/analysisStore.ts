import { Store } from 'pullstate';

export type MetricResult = {
  id?: string | number;
  code?: string;
  metric?: string;
  topic?: string;
  category?: string;
  unit?: string;
  response?: string;
  context?: string;
};

export type AnalysisState = {
  loading: boolean;
  statusMessage: string;
  error: string | null;
  metricResults: MetricResult[];
};

export const AnalysisStore = new Store<AnalysisState>({
  loading: false,
  statusMessage: '',
  error: null,
  metricResults: [],
});
