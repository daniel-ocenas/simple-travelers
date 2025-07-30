'use client';
import { notification } from 'antd';
import React from 'react';

type NotificationDisplayStyle = 'info' | 'warning' | 'error' | 'success';
export const notify = (
  displayStyle: NotificationDisplayStyle,
  message: React.ReactNode,
  description?: React.ReactNode,
  keepOpen?: boolean,
  placement?: 'topRight' | 'top',
): void => {
  const options = {
    message,
    description,
    placement: placement ?? 'topRight',
    duration: 3,
  };
  if (keepOpen) {
    options.duration = 0;
  }
  notification[displayStyle](options);
};
