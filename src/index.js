import React, { PureComponent } from 'react';
import styles from './index.less';

export default class Steps extends PureComponent {
  render() {
    const { current, source } = this.props;
    const lastIndex = source.length - 1;
    const getCss = (index, name) => {
      if (current > index) {
        return styles[`step${name}Finish`];
      }
      if (current === index) {
        return styles[`step${name}Current`];
      }
      return styles[`step${name}Waiting`];
    };
    return (
      <div className={styles.stepContainer}>
        {(source || []).map((item, index) => (
          <div key={item.id} className={styles.stepItem}>
            {index < lastIndex ? (
              <div className={index < current ? styles.tailFinish : styles.tail} />
            ) : null}
            {index <= current ? (
              <div className={current === index ? styles.iconCurrent : styles.iconFinish}>
                <div className={styles.check}>
                  <div
                    className={current === index ? styles.checkLeftProcess : styles.checkLeftFinish}
                  />
                  <div
                    className={
                      current === index ? styles.checkRightProcess : styles.checkRightFinish
                    }
                  />
                </div>
              </div>
            ) : (
              <div className={styles.iconfWaiting} />
            )}
            <div className={getCss(index, 'Title')}>{item.title || ''}</div>
            {item.description ? (
              <div className={getCss(index, 'Desc')}>{item.description || ''}</div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

Steps.defaultProps = {
  current: 0,
  source: [],
};
