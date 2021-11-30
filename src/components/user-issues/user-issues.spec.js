/* eslint-disable no-undef */
import UserIssues from "./user-issues";
import { mount } from "@vue/test-utils";

describe("блок Issues", async () => {
  it("Отображает компонент с аватаром и именем пользователя", async () => {
    const wrapper = mount(UserIssues);

    await wrapper.setProps({
      isWithAvatar: true,
    });
    expect(wrapper.find("#user-issues").exists()).toBe(true);
  });
  it("Отображает компонент с toggler", async () => {
    const wrapper = mount(UserIssues);

    await wrapper.setProps({
      isWithIssues: true,
    });
    expect(wrapper.find("#toggler").exists()).toBe(true);
  });
  it("Отображает переданные данные о репозитории", async () => {
    const wrapper = mount(UserIssues);

    await wrapper.setProps({
      repository: {
        profession: "JavaScript",
        description: "123",
      },
    });
    expect(wrapper.find(".user-info__title").text()).toBe("JavaScript");
    expect(wrapper.find(".user-info__prof-info").text()).toBe("123");
  });
  it("Происходит запрос issues, если передан url в параметры", async () => {
    const wrapper = mount(UserIssues);
    const url = "123";
    
    await wrapper.setProps({
        repository: {
          url,
        },
      });
      
    expect(wrapper.props().repository.url).toBe(url);

    jest.mock("axios", () => ({
        get: () => Promise.resolve({ title: "testTitle", description: "testDescription" })
    }));

    wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.issues.title).toBe('testTitle');
        expect(wrapper.vm.issues.title).toBe('testDescription');
      });
    });
  });
