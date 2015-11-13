/*
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2014 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

package org.sonarqube.ws.client.permission;

import javax.annotation.CheckForNull;
import javax.annotation.Nullable;

import static java.util.Objects.requireNonNull;

public class UsersWsRequest {
  private String permission;
  private String projectId;
  private String projectKey;
  private String selected;
  private String query;
  private Integer page;
  private Integer pageSize;

  public String getPermission() {
    return permission;
  }

  public UsersWsRequest setPermission(String permission) {
    this.permission = requireNonNull(permission);
    return this;
  }

  @CheckForNull
  public String getProjectId() {
    return projectId;
  }

  public UsersWsRequest setProjectId(@Nullable String projectId) {
    this.projectId = projectId;
    return this;
  }

  @CheckForNull
  public String getProjectKey() {
    return projectKey;
  }

  public UsersWsRequest setProjectKey(@Nullable String projectKey) {
    this.projectKey = projectKey;
    return this;
  }

  @CheckForNull
  public String getSelected() {
    return selected;
  }

  public UsersWsRequest setSelected(@Nullable String selected) {
    this.selected = selected;
    return this;
  }

  @CheckForNull
  public String getQuery() {
    return query;
  }

  public UsersWsRequest setQuery(@Nullable String query) {
    this.query = query;
    return this;
  }

  @CheckForNull
  public Integer getPage() {
    return page;
  }

  public UsersWsRequest setPage(int page) {
    this.page = page;
    return this;
  }

  @CheckForNull
  public Integer getPageSize() {
    return pageSize;
  }

  public UsersWsRequest setPageSize(int pageSize) {
    this.pageSize = pageSize;
    return this;
  }
}
