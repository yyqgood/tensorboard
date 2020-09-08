/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/

import {PolymerElement, html} from '@polymer/polymer';
import {customElement, property} from '@polymer/decorators';

@customElement('tf-no-data-warning')
class TfNoDataWarning extends PolymerElement {
  static readonly template = html`
    <template is="dom-if" if="[[showWarning]]">
      <div class="warning">
        <h3>No <span>[[dataType]]</span> data was found.</h3>
        <p>Probable causes:</p>
        <ul>
          <li>
            You haven't written any <span>[[dataType]]</span> data to your event
            files.
          </li>
          <li>TensorBoard can't find your event files.</li>
        </ul>
        <p>
          If you're new to using TensorBoard, and want to find out how to add
          data and set up your event files, check out the
          <a
            href="https://github.com/tensorflow/tensorboard/blob/master/README.md"
          >
            README
          </a>
          and perhaps the
          <a
            href="https://www.tensorflow.org/get_started/summaries_and_tensorboard"
          >
            TensorBoard tutorial </a
          >.
        </p>

        <p>
          If you think TensorBoard is configured properly, please see the
          <a
            href="https://github.com/tensorflow/tensorboard/blob/master/README.md#my-tensorboard-isnt-showing-any-data-whats-wrong"
          >
            section of the README devoted to missing data problems
          </a>
          and consider filing an issue on GitHub.
        </p>
      </div>
    </template>
    <style>
      .warning {
        max-width: 540px;
        margin: 80px auto 0 auto;
      }
    </style>
  `;

  @property({type: String})
  dataType: string;

  @property({type: Boolean})
  showWarning: boolean;
}