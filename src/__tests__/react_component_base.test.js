/*
 * React Component に対する基本テスト
 * 使い方
 *   import で読み込んで必要なテストを実行する。all を呼び出すと全てのテストを実行する。
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';

export function component_can_be_rendered(reactClass) {
  test(reactClass.name + ' can be rendered', () => {
    const e = React.createElement;
    const component = TestUtils.renderIntoDocument(e(reactClass.name.toLowerCase()));
    const node = ReactDOM.findDOMNode(component);

    expect(node).not.toBeNull();
  });
}

// テストが最低1つ記述されていないといけないためダミーで追加したテスト(skipなので実行されない)
test.skip('', () => {});
