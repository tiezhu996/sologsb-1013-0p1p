export type CueKind = '灯光' | '音响' | '道具' | '演员' | '舞台' | '字幕';

/**
 * 提示相对上一条的开始方式：
 * - after：等上一条（及其同组并行提示）走完后再开始
 * - with：与上一条同时开始，同组按最长一条计时，后续从组结束时间继续
 */
export type CueStartMode = 'after' | 'with';

export interface Cue {
  id: string;
  kind: CueKind;
  title: string;
  duration: number;
  owner: string;
  lighting: string;
  sound: string;
  props: string[];
  cast: string[];
  notes: string;
  dependsOn: string[];
  startMode: CueStartMode;
  offset: number;
}

export interface Scene {
  id: string;
  act: string;
  name: string;
  title: string;
  startTime: string;
  locked: boolean;
  cues: Cue[];
}

export interface ShowData {
  title: string;
  venue: string;
  date: string;
  scenes: Scene[];
  updatedAt: string;
}

export interface VersionSnapshot {
  id: string;
  name: string;
  createdAt: string;
  data: ShowData;
}

export interface CueDraft {
  id?: string;
  kind: CueKind;
  title: string;
  duration: number;
  owner: string;
  lighting: string;
  sound: string;
  props: string;
  cast: string;
  notes: string;
  dependsOn: string;
  startMode: CueStartMode;
}

export interface CueIssue {
  id: string;
  severity: 'error' | 'warning' | 'info';
  title: string;
  detail: string;
  icon?: string;
  sceneId?: string;
  cueId?: string;
}

export interface VersionDiff {
  id: string;
  changed: boolean;
  label: string;
  before: string;
  after: string;
}

export const CUE_KINDS: CueKind[] = ['灯光', '音响', '道具', '演员', '舞台', '字幕'];
export const OWNERS = ['李岚', '周启', '陈默', '赵一帆', '孙禾', '待指定'];

export const START_MODE_LABELS: Record<CueStartMode, string> = {
  after: '接上一条',
  with: '与上一条同时',
};

export const START_MODE_OPTIONS: Array<{ value: CueStartMode; label: string }> = [
  { value: 'after', label: START_MODE_LABELS.after },
  { value: 'with', label: START_MODE_LABELS.with },
];
