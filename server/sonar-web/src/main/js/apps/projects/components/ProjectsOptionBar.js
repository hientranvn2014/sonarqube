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
//@flow
import React from 'react';
import classNames from 'classnames';
import CloseIcon from '../../../components/icons-components/CloseIcon';
import Tooltip from '../../../components/controls/Tooltip';
import PerspectiveSelect from './PerspectiveSelect';
import ProjectsSortingSelect from './ProjectsSortingSelect';
import { translate } from '../../../helpers/l10n';

type Props = {
  onPerspectiveChange: ({ view: string, visualization?: string }) => void,
  onSortChange: (sort: string, desc: boolean) => void,
  onToggleOptionBar: boolean => void,
  open: boolean,
  projects: Array<*>,
  projectsAppState: { loading: boolean, total?: number },
  selectedSort: string,
  view: string,
  visualization?: string
};

export default class ProjectsOptionBar extends React.PureComponent {
  props: Props;

  closeBar = (evt: Event & { currentTarget: HTMLElement }) => {
    evt.currentTarget.blur();
    evt.preventDefault();
    this.props.onToggleOptionBar(false);
  };

  renderSortingSelect() {
    const { projectsAppState, projects, view } = this.props;
    const limitReached =
      projects != null &&
      projectsAppState.total != null &&
      projects.length < projectsAppState.total;

    if (view === 'visualizations' && !limitReached) {
      return (
        <Tooltip overlay={translate('projects.sort.disabled')}>
          <div>
            <ProjectsSortingSelect
              className="projects-topbar-item js-projects-sorting-select disabled"
              onChange={this.props.onSortChange}
              selectedSort={this.props.selectedSort}
              view={this.props.view}
            />
          </div>
        </Tooltip>
      );
    }
    return (
      <ProjectsSortingSelect
        className="projects-topbar-item js-projects-sorting-select"
        onChange={this.props.onSortChange}
        selectedSort={this.props.selectedSort}
        view={this.props.view}
      />
    );
  }

  render() {
    const { open } = this.props;
    return (
      <div className="projects-topbar">
        <div className={classNames('projects-topbar-actions', { open })}>
          <a className="projects-topbar-button button-icon" href="#" onClick={this.closeBar}>
            <CloseIcon />
          </a>
          <div className="projects-topbar-actions-inner">
            <PerspectiveSelect
              className="projects-topbar-item js-projects-perspective-select"
              onChange={this.props.onPerspectiveChange}
              view={this.props.view}
              visualization={this.props.visualization}
            />
            {this.renderSortingSelect()}
          </div>
        </div>
      </div>
    );
  }
}
