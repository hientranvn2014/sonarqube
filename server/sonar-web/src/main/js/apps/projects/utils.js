/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
// @flow
import { translate } from '../../helpers/l10n';

const LOCALSTORAGE_KEY = 'sonarqube.projects.default';
const LOCALSTORAGE_FAVORITE = 'favorite';
const LOCALSTORAGE_ALL = 'all';

export const isFavoriteSet = (): boolean => {
  const setting = window.localStorage.getItem(LOCALSTORAGE_KEY);
  return setting === LOCALSTORAGE_FAVORITE;
};

export const isAllSet = (): boolean => {
  const setting = window.localStorage.getItem(LOCALSTORAGE_KEY);
  return setting === LOCALSTORAGE_ALL;
};

const save = (value: string) => {
  try {
    window.localStorage.setItem(LOCALSTORAGE_KEY, value);
  } catch (e) {
    // usually that means the storage is full
    // just do nothing in this case
  }
};

export const saveAll = () => save(LOCALSTORAGE_ALL);

export const saveFavorite = () => save(LOCALSTORAGE_FAVORITE);

export const SORTING_METRICS = [
  { value: 'name' },
  { value: 'analysis_date' },
  { value: 'reliability' },
  { value: 'security' },
  { value: 'maintainability' },
  { value: 'coverage' },
  { value: 'duplications' },
  { value: 'size' }
];

export const SORTING_LEAK_METRICS = [
  { value: 'name' },
  { value: 'analysis_date' },
  { value: 'new_reliability', complement: 'on_new_code' },
  { value: 'new_security', complement: 'on_new_code' },
  { value: 'new_maintainability', complement: 'on_new_code' },
  { value: 'new_coverage', complement: 'on_new_code' },
  { value: 'new_duplications', complement: 'on_new_lines' },
  { value: 'new_lines' }
];

export const SORTING_SWITCH = {
  analysis_date: 'analysis_date',
  name: 'name',
  reliability: 'new_reliability',
  security: 'new_security',
  maintainability: 'new_maintainability',
  coverage: 'new_coverage',
  duplications: 'new_duplications',
  size: 'new_lines',
  new_reliability: 'reliability',
  new_security: 'security',
  new_maintainability: 'maintainability',
  new_coverage: 'coverage',
  new_duplications: 'duplications',
  new_lines: 'size'
};

export const VIEWS = ['overall', 'leak'];

export const VISUALIZATIONS = [
  'risk',
  'reliability',
  'security',
  'maintainability',
  'coverage',
  'duplications'
];

export const localizeSorting = (sort?: string) => {
  return translate('projects.sort', sort || 'name');
};

export const parseSorting = (sort: string): { sortValue: string, sortDesc: boolean } => {
  const desc = sort[0] === '-';
  return { sortValue: desc ? sort.substr(1) : sort, sortDesc: desc };
};
