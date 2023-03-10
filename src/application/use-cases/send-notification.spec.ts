import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    sendNotification.execute({
      content: 'This is a test notification',
      category: 'social',
      recipientId: 'example-recipient-id-notification',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
